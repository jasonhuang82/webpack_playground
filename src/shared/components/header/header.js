import React, { PureComponent } from 'react';
import cx from 'classnames';
import style from './style.module.scss';

class Header extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {
            navMeunListModal: false,
            navNoticeModal: false,
        };
    }
    
    renderNavMeunList = () => {
        const { navMeunListModal } = this.state;
        return (
            <div
                className={cx(style.headerNavMeunList,{
                    [style.headerNavMeunListOpen]: navMeunListModal,
                })}
            >
                <span className={style.headerNavClose}>
                    <img
                        src={CloseIcon}
                        alt=""
                        onClick={this.handleModalClose('navMeunListModal')}
                    />
                </span>
                <ul>
                    <li>
                        <a href="" target="__blank" rel="noopener noreferrer">
                            DOWNLOAD APP
                        </a>
                    </li>
                    <li
                        className="cursor_pointer"
                        onClick={this.handleModalOpen('navNoticeModal')}
                    >
                        TERMS & CONDITIONS
                    </li>
                    <li>
                        <a href="" className={style.headerNavMeunListSocialLink} target="__blank" rel="noopener noreferrer">
                            <img src={FBIcon} alt=""/>
                            <span>Share</span>
                        </a>
                    </li>
                    <li>
                        <a href="" className={style.headerNavMeunListSocialLink} target="__blank" rel="noopener noreferrer">
                            <img src={LineIcon} alt=""/>
                            <span>Share</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }

    renderNavNotice = () => {
        const { navNoticeModal } = this.state;
        return (
            <div
                className={cx(style.headerNavNotice, {
                    [style.headerNavNoticeOpen]: navNoticeModal,
                })}
            >
                <span className={style.headerNavClose}>
                    <img src={CloseIcon} alt=""/>
                </span>
                <ul>
                    <li>
                        <h2>活動辦法</h2>
                        <ol>
                            <li>活動日期：2018/11/5-11/15，優惠代碼限活動期間內兌換，逾期失效。</li>
                            <li>
                                超值方案一：活動期間內結帳輸入代碼【1111】，強檔電影任選一部只要11元。每個帳號限使用一次，每次限兌換一部「單租電影」。影片須於完成付款程序後30天內開始觀看，開始播放後可於48小時內無限次收看。逾期視同放棄，不得要求遞延或補償此優惠。
                            </li>
                            <li>
                                超值方案二：活動期間內兌換代碼【LOVERS】購買/升級月付會員方案，再送一個月，熱門高畫質影音暢看60天只要$250元，享受好片看過癮每天只要4.1元！（註：優惠到期後將恢復每月自動續扣，扣款前Mail提醒亦可隨時取消；若優惠代碼持有人已為月付會員，優惠將於當下月付週期結束後第一天生效；此優惠代碼不適用於亞太電信、台灣之星、BANDOTT便當、台數科系統台之既有CATCHPLAY月付會員兌換，以避免重複付款。）
                            </li>
                            <li>
                                使用者請參考活動頁兌換說明或至以下連結：<a href="https://bit.ly/2FcBggB" target="_blank">https://bit.ly/2FcBggB</a>即可輸入代碼兌換。
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
        );
    }

    handleModalOpen = modalState => () => {
        this.setState({
            [modalState]: true,
        });
    }

    handleModalClose = modalState => () => {
        this.setState({
            [modalState]: false,
        });
    }

    renderNav = () => {
        return (
            <nav className={style.headerNav}>
                <div
                    className={style.headerNavMeun}
                    onClick={this.handleModalOpen('navMeunListModal')}
                >
                    <img
                        src={MeunLogo}
                        alt="catchplay+"
                    />
                </div>
                <ul
                    className={style.headerNavLinks}
                >
                    <li>
                        <a href="" target="__blank" rel="noopener noreferrer">
                            DOWNLOAD APP
                        </a>
                    </li>
                    <li
                        className="cursor_pointer"
                        onClick={this.handleModalOpen('navMeunListModal')}
                    >
                        TERMS & CONDITIONS
                    </li>
                </ul>
                
                { this.renderNavMeunList() }
                
                { this.renderNavNotice() }
            </nav>
        );
    }
    render () {
        return (
            <header
                className={style.header}
            >
                <div className={style.headerLogo}>
                    <img src={CpLogo} alt="catchplay+" />
                </div>

                { this.renderNav() }
            </header>
        );
    }
}

const Header = () => {
    return (
        <header className={style.header}>
            Header
        </header>
    );
}

export default Header;
