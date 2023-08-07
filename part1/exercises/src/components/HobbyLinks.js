export default function HobbyLinks() {
    let hobbyLinks = ["https://en.wikipedia.org/wiki/Archery", "https://en.wikipedia.org/wiki/Weightlifting"];
    return (
        <div>
            <header>Hobbies</header>
            <a href={hobbyLinks[0]}>Archery</a>
            <br></br>
            <a href={hobbyLinks[1]}>Weightlifting</a>
        </div>
    )
}