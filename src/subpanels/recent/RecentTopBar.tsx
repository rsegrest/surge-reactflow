import BaseButton from "../../button/BaseButton";
import IconType from "../../icon/IconType";
import RecentLink from "./RecentLink";
import RecentList from "./RecentList";
import RecentListDisplayTypeButton from "../../button/RecentListDisplayTypeButton";

const RecentTopBar = (props:{recentLinks:string[]}) => {
    let recentLinks = props.recentLinks || ["Composition Graph", "Mission Graph", "Mapping", "Dyreqt Run"]
    return (
        <div>
            <div
                style={{
                    borderBottom: '1px solid rgba(255,255,255,0.5)',
                    marginBottom: '1rem',
                }}
            >
                <span>
                    <h3
                        style={{
                            margin: '1.1rem',
                            color: 'white',
                            display: 'inline-block',
                        }}
                    >Recent:</h3>
                </span>
                {
                    recentLinks.map((link) => (
                        <RecentLink
                            key={link}
                            linkName={link}
                        />
                    ))
                }
                <span
                    style={{
                        float: 'right',
                        marginRight: '1.1rem',
                        color: 'white',
                        display: 'inline-block',
                        top: '1rem',
                    }}
                >
                    <RecentListDisplayTypeButton
                        listDisplayType={'grid'}
                        isActive={true}
                    />
                    <RecentListDisplayTypeButton
                        listDisplayType={'list'}
                        isActive={true}
                    />
                </span>
            </div>

            <RecentList />
        </div>
    )
}
export default RecentTopBar;