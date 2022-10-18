// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    // passo 2 - dar um jeito de identificar o clique no elemento da aba
    tab.addEventListener("click", function() {

        if(tab.classList.contains("selected")){
            return;
        }

        selectTab(tab)
        showTabInformation(tab)
    });
});

function selectTab(tab) {
    // passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const tabSelected = document.querySelector(".tab.selected");
    tabSelected.classList.remove("selected");

    // passo 4 - marcar a aba clicada como selecionado
    tab.classList.add("selected");
}

function showTabInformation(tab){
    // passo 5 - esconder o conteúdo anterior
    const selectedInformation = document.querySelector(".information.selected");
    selectedInformation.classList.remove("selected");

    // passo 6 - mostrar o conteúdo da aba selecionada
    const idInformationTab = `information-${tab.id}`

    const informationShown = document.getElementById(idInformationTab)
    informationShown.classList.add("selected")
}