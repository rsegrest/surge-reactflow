import React from "react";
import { HorizontalInset } from "../components_import/HorizontalInset";
import { QuickCards } from "../components_import/QuickCards";
import { RecentFilesList } from "../components_import//RecentFilesList";
import { IconsLight31 } from "../icons/IconsLight31";
import { IconsLight32 } from "../icons/IconsLight32";
import { IconsLight33 } from "../icons/IconsLight33";
import { IconsLight34 } from "../icons/IconsLight34";
import { IconsLight35 } from "../icons/IconsLight35";
import { IconsLight36 } from "../icons/IconsLight36";
import { IconsPrimary } from "../icons/IconsPrimary";
import { IconsPrimary1 } from "../icons/IconsPrimary1";
import "../../style/dashboard.css";
import { Col, Row } from "react-bootstrap"

export const Dashbody = (): JSX.Element => {
    return (
        <div className="body">
            <Row className="alignRowPosition">
                <RecentFilesList
                    className="recent-files-list-instance"
                    darkModeButtonEffect="pressed"
                    darkModeButtonIcon={<IconsLight31 className="icon-instance-node-2" />}
                    darkModeMenuListDates="00/00/00"
                    darkModeMenuListDates1="00/00/00"
                    darkModeMenuListDates2="00/00/00"
                    darkModeMenuListIcon={<IconsLight33 className="icon-instance-node-2" />}
                    darkModeMenuListIcon1={<IconsPrimary className="icon-instance-node-2" />}
                    darkModeMenuListIcon2={<IconsPrimary1 className="icon-instance-node-2" />}
                    darkModeMenuListText="File_name.composition_graph"
                    darkModeMenuListText1="File_name.mission_graph"
                    darkModeMenuListText2="File_name.resource_network"
                    override={<IconsLight32 className="icon-instance-node-2" />}
                    subheadingClassName="recent-files-list-2" />
            </Row>
            {/* <HorizontalInset
                className="horizontal-inset-instance"
                // divider="/img/divider-1.svg"
                dividerClassName="horizontal-inset-2" /> */}


            <div className="top">
                <Row className="alignRowPosition">
                    <Row>
                        <div className="text-wrapper-5">DaaS Quick Start</div>
                    </Row>

                    <div className="quick-start">
                        <Col xs="4">
                            <QuickCards
                                className="quick-cards-instance"
                                icon={<IconsLight34 className="icons-light-2" />}
                                property1="default"
                                text="Composition Graph" />
                        </Col>
                        <Col xs="4">
                            <QuickCards
                                className="quick-cards-instance"
                                icon={<IconsLight35 className="icons-light-2" />}
                                property1="default"
                                text="Mission Graph" />
                        </Col>
                        <Col xs="4">
                            <QuickCards
                                className="quick-cards-instance"
                                icon={<IconsLight36 className="icons-light-2" />}
                                property1="default"
                                text="Resource Network" />
                        </Col>
                    </div>
                </Row>
            </div >

        </div >
    );
};
export default Dashbody