import { CommandName } from "eufy-security-client-ash";

import { StationCommand } from "./command.js";

export interface StationResultTypes {
    [StationCommand.reboot]: { async?: boolean };
    [StationCommand.setGuardMode]: { async?: boolean };
    [StationCommand.isConnected]: { serialNumber?: string; connected: boolean };
    [StationCommand.connect]: Record<string, never>;
    [StationCommand.disconnect]: Record<string, never>;
    [StationCommand.getPropertiesMetadata]: { serialNumber?: string; properties: Record<string, unknown>; };
    [StationCommand.getProperties]: { serialNumber?: string; properties: Record<string, unknown>; };
    [StationCommand.setProperty]: { async?: boolean };
    [StationCommand.triggerAlarm]: { async?: boolean };
    [StationCommand.resetAlarm]: { async?: boolean };
    [StationCommand.hasProperty]: { serialNumber?: string; exists: boolean };
    [StationCommand.hasCommand]: { serialNumber?: string; exists: boolean };
    [StationCommand.getCommands]: { serialNumber?: string; commands: Array<CommandName>; };
    [StationCommand.chime]: { async?: boolean };
    [StationCommand.downloadImage]: { async?: boolean };
    [StationCommand.databaseQueryLatestInfo]: { async?: boolean };
    [StationCommand.databaseQueryLocal]: { async?: boolean };
    [StationCommand.databaseCountByDate]: { async?: boolean };
    [StationCommand.databaseDelete]: { async?: boolean };

    //Legacy
    [StationCommand.isConnectedLegacy]: { connected: boolean };
}
