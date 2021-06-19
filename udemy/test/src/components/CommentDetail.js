export default function Comment(props) {
    const { author, time, content, avatar } = props;

    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt='avatar' src={avatar} />
            </a>
            <div className='content'>
                <a className='author' href='/'>
                    {author}
                </a>
                <div className='metadata'>
                    <span className='date'>{time}</span>
                </div>
                <div className='text'>{content}</div>
            </div>
        </div>
    )
}