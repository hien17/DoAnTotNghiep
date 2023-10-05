import { FC, PropsWithChildren, memo } from 'react';
// import './index.scss'; Import if needed

interface Props {
    title?: string;
    subTitle?: string;
}

const HomeLayout: FC<PropsWithChildren<Props>> = memo(
    ({ children, title, subTitle }) => {
        return <>{children}</>;
    }
);
HomeLayout.displayName = 'HomeLayout';

export default HomeLayout;
