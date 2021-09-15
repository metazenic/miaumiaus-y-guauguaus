const Emoji = (props) => {
    return(
        <span aria-label={`emoji-${props.label}`} role="img">{props.emoji}</span>
    )
}

export default Emoji;