/*
 * This program and the accompanying materials are made available under the terms of the *
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at *
 * https://www.eclipse.org/legal/epl-v20.html                                      *
 *                                                                                 *
 * SPDX-License-Identifier: EPL-2.0                                                *
 *                                                                                 *
 * Copyright Contributors to the Zowe Project.                                     *
 *                                                                                 *
 */

import * as zowe from "@zowe/cli";
import { ZoweExplorerAPI } from './ZoweExplorerAPI';
import { TreeItem } from "vscode";

export class ZoweExtendedJESAPI {

    public async newJESAPI() {
        console.log("This is a new JES API");
    }

}
