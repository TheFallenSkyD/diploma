import React, {useEffect, useRef} from "react";
import TuiImageEditor from 'tui-image-editor';
import {Button} from "@mui/material";

function useCombinedRefs<T>(...refs: any[]) {
    const targetRef = useRef<T>();

    useEffect(() => {
        refs.forEach(ref => {
            if (!ref) return

            if (typeof ref === 'function') {
                ref(targetRef.current)
            } else {
                ref.current = targetRef.current
            }
        })
    }, [refs])

    return targetRef
}

export const Editor = React.forwardRef<TuiImageEditor | null, tuiImageEditor.IOptions>(
    (props, ref) => {
        const rootEl = useRef<HTMLDivElement | null>(null);
        const innerRef = useRef<TuiImageEditor | null>(ref as TuiImageEditor | null);

        const combinedRef = useCombinedRefs<TuiImageEditor | null>(ref, innerRef);

        const isEventHandlerKeys = (key: string) => {
            return /on[A-Z][a-zA-Z]+/.test(key);
        }

        const bindEventHandlers = (props: any, prevProps?: any) => {
            Object.keys(props)
                .filter(isEventHandlerKeys)
                .forEach((key) => {
                    const eventName = key[2].toLowerCase() + key.slice(3);
                    // For <ImageEditor onFocus={condition ? onFocus1 : onFocus2} />
                    if (prevProps && prevProps[key] !== props[key]) {
                        // this.imageEditorInst?.off(eventName);
                    }
                    combinedRef.current?.on(eventName, props[key]);
                });
        }

        const unbindEventHandlers = () => {
            Object.keys(props)
                .filter(isEventHandlerKeys)
                .forEach((key) => {
                    const eventName = key[2].toLowerCase() + key.slice(3);
                    // this.imageEditorInst?.off(eventName);
                });
        }

        useEffect(() => {
            combinedRef.current = new TuiImageEditor(rootEl.current as Element, {
                ...props,
            });

            bindEventHandlers(props);

            return () => {
                unbindEventHandlers();
                combinedRef.current?.destroy();
                combinedRef.current = null;
            }
        }, [props])

        const handleClick = async () => {
            const result = await combinedRef.current?.toDataURL() as string;
            localStorage.setItem('image', result)
        }

        return (
            <>
                <div ref={rootEl}/>
                <Button
                    onClick={handleClick}
                >
                    Move to img2img
                </Button>
            </>
        )
    });

Editor.displayName = "ImageEditor"