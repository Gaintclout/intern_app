from fastapi import APIRouter
import requests
import time
import os

router = APIRouter(prefix="/code", tags=["Code Execution"])

JUDGE0_URL = os.getenv("JUDGE0_URL", "http://judge0-master-server-1:2358")


@router.post("/run")
def run_code(payload: dict):
    code = payload.get("code")
    language_id = payload.get("language_id", 71)  # Default Python

    # Step 1: Submit code
    response = requests.post(
        f"{JUDGE0_URL}/submissions",
        json={
            "source_code": code,
            "language_id": language_id
        }
    )

    token = response.json().get("token")

    # Step 2: Poll for result
    for _ in range(10):
        result = requests.get(f"{JUDGE0_URL}/submissions/{token}").json()

        if result.get("status", {}).get("id") not in [1, 2]:
            return {
                "stdout": result.get("stdout"),
                "stderr": result.get("stderr"),
                "compile_output": result.get("compile_output"),
                "status": result.get("status")
            }

        time.sleep(1)

    return {"message": "Still processing"}