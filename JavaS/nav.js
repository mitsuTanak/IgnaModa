const createNav = () => {
    let nav = document.querySelector('.navbar')

    nav.innerHTML = `
    <div class="nav"> 
        <img src="Img/Logotipos - sem fundo/Igna_modas_-_logotupo-removebg-preview.png" class="logo" alt="logo tema claro">
        <div class="nav-itens">  
            <div class="search">
                <input type="text" class="barar-pesquisa" placeholder="Pesquise produtos">
                <button class="pesquisar"><img src="Img/Icons/iconmonstr-magnifier-lined-240.png" alt=""></button>                
            </div>
            <a href="#"><img src="Img/Icons/iconmonstr-user-5-240.png" alt="botão para visualização de perfil"></a>
            <a href="#"><img src="Img/Icons/iconmonstr-shopping-cart-8-240.png" alt="botão para a visualização dos produtos no carrinho"></a>
            <a href="#"><img src="Img/Icons/iconmonstr-heart-filled-240.png" alt="botão para a visualização dos produtos no favoritos"></a>
        </div>
    </div>
    `;
}