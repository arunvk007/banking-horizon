
const HeaderBox = ({ type = "title", title, subtext,
 user }: HeaderBoxProps) => {
  return (
    <div className="header-box">
        <h1 className="header-box-title">
            {title}
            {type === 'greeting' && (
                <span className="text-bankGradient">
                    &nbsp;{user}
                    {/* &nbsp; is used to give space between greeting and name */}
                </span>
            )}
        </h1>
        <p className="header-box-subtext">{subtext}</p>
    </div>
  )
}

export default HeaderBox