import React, { Component } from 'react';

export class TikTok extends Component {
    componentDidMount() {
        window.open("https://www.tiktok.com/@sabbirtop111", "_blank");
    }

    render() {
        return (
            <div className="h-full w-full flex flex-col justify-center items-center bg-ub-cool-grey text-white">
                <img className="w-16 mb-4" src="./themes/Yaru/apps/tiktok.svg" alt="TikTok" />
                <p className="mb-2">Opening TikTok in a new tab…</p>
                <a
                    className="underline text-ubt-blue"
                    href="https://www.tiktok.com/@sabbirtop111"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Click here if it didn't open
                </a>
            </div>
        );
    }
}

export default TikTok

export const displayTikTok = () => {
    return <TikTok> </TikTok>;
}
