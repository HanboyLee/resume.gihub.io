import { Box, Button, Icon } from "@mui/material";
import React from "react";
import styled from "styled-components";
import clsx from "clsx";
import { useMediahandle } from "../../Hooks/MediaHook";
import { debounce } from "../../units/commonHelper";

const Contact = ({ datas }) => {
    const HocItem = WithContactItem(ContactItem);
    if (!datas?.length || !datas) {
        return <></>;
    }
    return (
        <ContactContent>
            {datas.map((data) => (
                <HocItem key={data.id} {...data} />
            ))}
        </ContactContent>
    );
};

const ContactItem = ({ IconSvg, method, onClick = null }) => {
    return (
        <Box onClick={onClick} className="IconBox">
            {method ? (
                <Icon className="Icon" fontSize={"large"}>
                    <IconSvg />
                </Icon>
            ) : (
                <IconSvg className="Icon" fontSize={"large"} />
            )}
        </Box>
    );
};

const WithContactItem = (Com) => {
    const isLessSmMedai = useMediahandle({ direction: "down", pointkey: "sm" });
    const [open, setOpen] = React.useState(false);
    const onClick = () => setOpen((prev) => !prev);
    const onClose = () => setOpen(false);
    const onScroll = () => setOpen(false);
    React.useEffect(() => {
        window.addEventListener("scroll", debounce(onScroll, 300));
        return () => window.removeEventListener("scroll", debounce(onScroll, 300));
    }, []);
    const modthds = React.useMemo(
        () =>
            isLessSmMedai
                ? {
                      onClick: onClose,
                      onMouseOut: onClose,
                  }
                : {
                      onClick: onClose,
                  },
        [isLessSmMedai]
    );

    return (props) => {
        if (!props.method) {
            // 點擊連結
            return (
                <Link href={props.src} target="_blank">
                    <Com {...props} />
                </Link>
            );
        }
        return (
            // 點擊顯示Modal
            <>
                <Com onClick={onClick} {...props} />
                {open && (
                    <Modal {...modthds}>
                        <img width={"100%"} src={props.src} alt={props.src} />
                    </Modal>
                )}
            </>
        );
    };
};

const Link = styled.a`
    color: #000;
`;
const Modal = styled(Box)`
    z-index: 1;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
`;

const ContactContent = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: ${({ theme }) => theme.spacing(1)};
    padding-bottom: ${({ theme }) => theme.spacing(1)};
    & .IconBox {
        text-decoration: none;
        padding-left: ${({ theme }) => theme.spacing(1)};
        padding-right: ${({ theme }) => theme.spacing(1)};
        color: #666;
        cursor: pointer;
        @media (max-width: ${({ theme }) => `${theme.breakpoints.values.sm}px`}) {
            color: #000;
        }
        .Icon:hover {
            color: #000;
        }
        .Icon:active {
            color: #000;
        }
    }
`;
export default Contact;
