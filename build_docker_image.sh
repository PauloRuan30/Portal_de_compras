#!/bin/bash

help() {
    echo "ajuda"
}

hmg() {
    echo "Fazendo build da imagem de: HOMOLOGAÇÃO"
    docker image build -t portal-de-compras .
    docker tag portal-de-compras portal-de-compras:hmg
}

prod() {
    echo "Fazendo build da imagem de: PRODUÇÃO"
    docker image build -t portal-de-compras .
    docker tag portal-de-compras portal-de-compras:prod
}

remover_todos() {
    echo "REMOVENDO TODAS AS IMAGENS. \n PROSSEGUIR? [(S)im/(N)ão]"

    read option

    if [$option == "s" || "S"]; then
        echo "PROSSEGUINDO"
        docker image remove portal-de-compras
    elif [$option == "n" || "N"]; then
        echo "Saindo da ferramenta..."
        exit
    else
        echo "INPUT INVALIDO"
        echo "Saindo da ferramenta..."
        exit
}

remover_hmg() {
    echo "REMOVENDO: HOMOLOGAÇÃO. \n PROSSEGUIR? [(S)im/(N)ão]"

    read option

    if [$option == "s"  || "S"]; then
        echo "PROSSEGUINDO"
        docker image remove portal-de-compras:hmg
    elif [$option == "n" || "N"]; then
        echo "Saindo da ferramenta..."
        exit
    else
        echo "INPUT INVALIDO"
        echo "Saindo da ferramenta..."
        exit
}

remover_prod () {
    echo "REMOVENDO: PRODUÇÃO. \n PROSSEGUIR? [(S)im/(N)ão]"
    
    read option

    if [$option == "s" || "S"]; then
        echo "PROSSEGUINDO"
        docker image remove portal-de-compras:prod
    elif [$option == "n" || "N"]; then
        echo "Saindo da ferramenta..."
        exit
    else
        echo "INPUT INVALIDO"
        echo "Saindo da ferramenta..."
        exit
}

push_prod() {
    echo "Efetuando o push para o registry: PRODUÇÃO"
    docker tag portal-de-compras:prod cevmdocker-registry.tre-ce.jus.br:5000/portal-de-compras:prod
    docker push cevmdocker-registry.tre-ce.jus.br:5000/portal-de-compras:prod
}

push_hmg() {
    echo "Efetuando o push para o registry: HOMOLOGAÇÃO"
    docker tag portal-de-compras:hmg cevmdocker-registry.tre-ce.jus.br:5000/portal-de-compras:hmg
    docker push cevmdocker-registry.tre-ce.jus.br:5000/portal-de-compras:hmg
}

while getopts ":hpaxcvbn:" flag;
do
    case $flag in
        h) 
            hmg
            exit;;

        p) 
            prod
            exit;;

        a) 
            help
            exit;;

        x) 
            push_prod
            exit;;

        c) 
            push_hmg
            exit;;

        v) 
            remover_prod
            exit;;

        b) 
            remover_hmg
            exit;;

        n) 
            remover_todos 
            exit;;

        \?) 
            echo "Opção invalida" && help
            exit;;
    esac
done
