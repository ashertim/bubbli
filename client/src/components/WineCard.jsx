import '../css/WineCard.css'

function WineCard() {
    return (
        <div className='wine-card'>
            <div className='wine-label-picture'></div>
            <div className='wine-info-text'>
                This is a wine card. Wine information goes here.
            </div>
            <div className='wine-review'/>
            <div className='wine-review-text'>
                    This is a wine review. 10/10
                </div>
        </div>
    )
}

export default WineCard;