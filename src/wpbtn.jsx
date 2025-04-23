import React, { useState, useEffect } from "react";

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            setIsVisible(true);
        } else {
            // Scrolling up
            setIsVisible(false);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            <div>
                {isVisible && (
                <a
                    href={"https://web.whatsapp.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.whatsappButton}
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                        style={styles.icon}
                    />
                </a>
                )}
            </div>
        </>
    );
};

const styles = {
    whatsappButton: {
        position: "fixed",
        bottom: "20px",
        right: "100px",
        backgroundColor: ":#078078",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        textDecoration: "none",
    },
    icon: {
        width: "35px",
        height: "35px",
    },
};

export default WhatsAppButton;
