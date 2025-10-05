import "../style/about.css"

function About(props)
{
    return (
        <>
            <div class="about-card">
                {props.children}
            </div>
        </>
    )
}

export default About;