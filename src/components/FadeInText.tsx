
interface Props{
    text:string;
}

export const FadeInText = ({ text }:Props) => {
    return (
        <div className="p-container">
            <div className="p">{addAnimation(text)}</div>
        </div>
    );
};

const addAnimation = (text:any) => {
    const ANIMATION_DELAY = 6;
    const allChars = [...text].map((char) => (char === " " ? <>&nbsp;</> : char));
    
    return allChars.map((char, i) => {
        return (
            <span
                key={i}
                className="char"
                style={{ animationDelay: `${ANIMATION_DELAY * i}ms` }}
            >
                {char}
            </span>
        );
    });
};
