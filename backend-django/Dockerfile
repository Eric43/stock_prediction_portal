# Need to make the docker file for using a conda environment.
# conda is used but also can be done (slightly different calls) 
# for the standard pyenv/VENV methods.  I was just running miniconda.
# will repeat for the frontend and dockercompose for the root.



# Different source:

FROM continuumio/miniconda3

ENV PYTHONUNBUFFERED=1

RUN apt update
RUN apt install gettext -y 

# Used different directory names

RUN mkdir /stk_pred_class

RUN copy Docker-compose.yml . && copy README.md .

RUN mkdir /backend-django

WORKDIR /stk_pred_class/backend-django

# Had to modify the enviroment file minimum requirement of python and django.
COPY environment_min.yml ./environment.yml

RUN conda env create -f environment.yml

# Make RUN commands use the new environment:

SHELL ["conda", "run", "-n", "drf_1d", "/bin/bash", "-c"]

#Could not get the social account to add with conda! Will need to try again?  
#Said it was installed but then had to use the pip to make it work.

#RUN pip install "django-allauth[socialaccount]"

# Copy the files from the backend django directory 

COPY . . 

# Choose to change the folder in the local image used to make the Docker
# chmod 755 start-django.sh to set permissions.

#Expose the port for web server \
EXPOSE 8000
# Slightly different entrypoint from stanard py env:
ENTRYPOINT ["conda", "run", "--no-capture-output", "-n", "drf_1d", "python", "manage.py", "runserver", "0.0.0.0:8000"]

#entry point changes to use the the start-django shell
#ENTRYPOINT [ "./start-django.sh" ]
# After verifying working: docker run -p 8000:8000 --name <NAME OF DOCKER IMG> -v 