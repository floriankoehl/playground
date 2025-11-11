from django.http import JsonResponse
from .models import User


def echo_view(request, text):
    times = request.GET.get('times')
    if times is not None:
        try:
            n = max(1, int(times))
        except ValueError:
            n = 1
        return JsonResponse({"echo": [text] * n})
    return JsonResponse({"echo": text})


def show_user(request, name):
    try:
        user = User.objects.get(name=name)
        return JsonResponse({"user": user.name})
    except User.DoesNotExist:
        return JsonResponse({"error": f"User '{name}' not found"}, status=404)






