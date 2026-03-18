"use client";

import { useEffect } from "react";

interface ChatWidgetProps {
    token: string;
    color?: string;
    position?: "left" | "right";
}

export default function ChatWidget({
    token,
    color = "#e11d48",
    position = "right",
}: ChatWidgetProps) {
    useEffect(() => {
        // Evitar duplicar
        if (document.getElementById("crm-widget-loader")) return;

        // Criar um container invisível
        const container = document.createElement("div");
        container.id = "crm-widget-loader";
        container.style.display = "none";
        document.body.appendChild(container);

        // Injetar o script como HTML puro via Range + createContextualFragment
        // Isso garante que document.currentScript funciona corretamente
        // porque o browser "parseia" a tag <script> normalmente (não via createElement).
        const range = document.createRange();
        range.selectNode(document.body);
        const fragment = range.createContextualFragment(
            `<script 
                src="https://minio-server.jssolucoeseservicos.com.br/cdn/widget.iife.js" 
                data-token="${token}" 
                data-color="${color}" 
                data-position="${position}"
            ><\/script>`
        );
        document.body.appendChild(fragment);

        return () => {
            const loader = document.getElementById("crm-widget-loader");
            if (loader) loader.remove();
            const host = document.getElementById("crm-widget-host");
            if (host) host.remove();
        };
    }, [token, color, position]);

    return null;
}

