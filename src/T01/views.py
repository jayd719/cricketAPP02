from django.shortcuts import render

# Create your views here.
def homepage(request):
    return render(request,"landingPage.html")

def admin_app(request):
    return render(request,"scoreCard.html")

def admin_app_test(request):
    return render(request,"adminApp_out.html")