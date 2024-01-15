'use client'

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

function ProfileTrainingDetail() {

    const data = [
        {
            label: "Pelatihan",
            value: "html",
            desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Magang",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },

    ];

    return (
        <div className="h-[50vh] w-full px-3">
            <Tabs value="html">
                <TabsHeader
                    indicatorProps={{
                        className: "bg-gray-900/10 shadow-xl !text-gray-900",
                    }}>
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value} >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            <div className="">
                                {desc}
                            </div>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
}

export default ProfileTrainingDetail;