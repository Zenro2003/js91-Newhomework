import './style.css'
const Welcome = () => {
    return (
        <div className="welcome">
            <div class="heroimage container">
                <h1 class="heroimage__title">
                    An online Pomodoro Timer to boost your productivity
                </h1>
            </div>
            <div class="catchcopy container">
                <h2 class="catchcopy__header">What is Pomofocus?</h2>
                <p class="catchcopy__text">
                    Pomofocus is a customizable pomodoro timer that works on
                    desktop &amp; mobile browser. The aim of this app is to help you
                    focus on any task you are working on, such as study,
                    writing, or coding. This app is inspired by 
                    <a href="https://francescocirillo.com/pages/pomodoro-technique"> Pomodoro Technique </a>
                    which is a time management method developed by Francesco
                    Cirillo.
                </p>
            </div>
        </div>
    )
}
export default Welcome;