FROM python:3.7.4-alpine3.10

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /backOffice

WORKDIR /backOffice

ADD . /backOffice/

RUN pip install --upgrade pip
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev
RUN pip install -r requirements.txt