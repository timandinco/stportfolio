import {createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "sxwpo1sg",
    dataset: "production",
    //apiVersion: "2025-01-13",
    useCdn: false,
};

const client = createClient(config);

export default client;
