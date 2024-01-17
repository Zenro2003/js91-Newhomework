import ThemeContext from '../../context/ThemeContext';
import './style.css'
const Footer = () => {
    return (
        <ThemeContext.Consumer>
            {(themeContext) => {
                return (
                    <div className={`footer ${themeContext.theme === "dark" ? "dark" : "light"}`}>
                        <h2>Footer</h2>
                    </div>
                )
            }}
        </ThemeContext.Consumer>
    )
}
export default Footer;