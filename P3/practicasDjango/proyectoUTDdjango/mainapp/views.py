from django.shortcuts import render

# Create your views here.

def index(request):
    mensaje='HOLAAAAAAAAAAAAAAA'
    return render (request,'mainapp/index.html',{
        'title':'Inicio',
        'content':'.::!BIENVENIDO A LA PAGINA PRINCIPAL!::.',
        'mensaje':mensaje
    })

def about(request):
    return render (request, 'mainapp/index.html', {
        'title' :'Acerca de nosotros',
        'content':'Somos un equipo de desarrollo de software'
    })
def mision(request):
    return render(request,'mainapp/index.html',{
        'title':'Mision',
        'content':'En la Universidad Tecnológica de Durango nuestra misión es:Formar seres humanos íntegros, profesionalmente calificados que sean agentes de cambio para el desarrollo económico, tecnológico y cultural que beneficien a la sociedad.'
    })

def vision(request):
    return render(request,'mainapp/index.html',{
        'title':'Vision',
        'content':'Para el año 2030 ser la primera opción de ingreso en educación superior, por tener el 100% de sus carreras acreditadas, cuerpos académicos consolidados, oferta académica de posgrados y el 70% de sus egresados desempeñándose profesionalmente.'
    })
def page404(request, exception):
    return render(request, 'mainapp/404.html', status=404)