# courses/cors_middleware.py

class CORSMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        # Set CORS headers
        response["Access-Control-Allow-Origin"] = "*"  # Adjust this for production
        response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response["Access-Control-Allow-Headers"] = "Content-Type"

        return response