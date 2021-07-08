function three() {
    g.scene = new THREE.Scene;
    g.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    document.body.insertBefore(g.renderer.domElement, document.querySelector("main"));
    document.querySelector("section.token iframe").setAttribute("src", "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x4cae95d03c85ae462daec44d5426f547a26faf47");
    g.pancakeSwap.remove();
    console.log("haha")
    // Init

    setTimeout(function () {
        gsap.ticker.add(() => {
            g.renderer.render(g.scene, g.camera);
        })
    }, 1000);
}
