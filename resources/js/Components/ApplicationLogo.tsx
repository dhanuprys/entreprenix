import { HTMLAttributes, ImgHTMLAttributes } from 'react';

export default function ApplicationLogo(
    props: ImgHTMLAttributes<HTMLImageElement> &
        HTMLAttributes<HTMLImageElement>,
) {
    return <img src="/images/logo.png" {...props} />;
}
