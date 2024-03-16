import React from 'react'
import Button from '../Button/button'

const Header = () => {

    const tg = window.Telegram.WebApp

    const onClose = () => {
        tg.close()
    }
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'} >
                {tg.initDateUnsafe?.user?.username}
            </span>
        </div>
    )
}

export default Header
