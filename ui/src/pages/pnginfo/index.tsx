import Layout from '@/components/Layout'
import React, {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import 'tui-image-editor/dist/tui-image-editor.css';
// @ts-ignore
const ImageEditorDynamic = dynamic(() =>
    import('../../components/Editor/Editor').then((mod) => mod.Editor), {ssr: false})

const myTheme: tuiImageEditor.IIncludeUIOptions["theme"] = {
    'downloadButton.backgroundColor': "rgb(10 25 41)",
    'loadButton.backgroundColor': "rgb(65,112,161)",
};


const MyComponent = () => {
    const [image, setImage] = useState<string>("");

    useEffect(() => {
        setImage(localStorage.getItem("image") ?? '');
    }, [])

    return (
        <>
            <ImageEditorDynamic
                includeUI={{
                    loadImage: {
                        path: image,
                        name: 'SampleImage',
                    },
                    theme: myTheme,
                    menu: ['resize', 'crop', 'flip', 'rotate', 'draw'],
                    initMenu: 'filter',
                    menuBarPosition: 'bottom',
                    uiSize: {
                        width: '100%',
                        height: 'calc(100vh - 160px)',
                    }
                }}
                cssMaxHeight={800}
                cssMaxWidth={700}
                selectionStyle={{
                    cornerSize: 20,
                    rotatingPointOffset: 70,
                }}
            />
        </>

    )
};

const Page = () => {
    return (
        <Layout>
            <MyComponent/>
        </Layout>
    )
}

export default Page