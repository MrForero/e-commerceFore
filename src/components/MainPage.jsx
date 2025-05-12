import { Header } from "./Header"

function MainPage() {
    return (<>
        <Header />
        <div className="welcome-container">
            <h1>BIENVENIDO A E-COMMERCE FORE</h1>
            <img src="/images/e-commer-main.jpg" alt="main e-commerce" />
            <p>
                E-Commerce Fore es tu destino confiable para comprar en línea, 
                diseñado para ofrecerte una experiencia de compra intuitiva, 
                rápida y segura. Desde tecnología de vanguardia, 
                ropa y accesorios de moda, 
                hasta artículos para el hogar y cuidado personal, 
                en E-Commerce Fore encuentras todo lo que necesitas en un solo lugar. 
                Nuestro compromiso es brindarte productos de alta calidad, 
                ofertas exclusivas, envíos eficientes y un servicio al cliente excepcional. Ya sea que busques lo último en tendencias o artículos esenciales del día a día, en E-Commerce Fore lo tienes al alcance de un clic. Descubre una nueva forma de comprar con comodidad y confianza.
            </p>
        </div>

    </>
    )
}

export default MainPage