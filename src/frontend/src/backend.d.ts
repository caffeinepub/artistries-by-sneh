import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SiteInfo {
    greetingMessage: string;
    artistName: string;
}
export interface backendInterface {
    getSiteInfo(): Promise<SiteInfo>;
    setSiteInfo(artistNameInput: string, greetingMessageInput: string): Promise<void>;
}
