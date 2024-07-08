/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-misused-new */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-vars */

// This file was automatically generated by elastic/elastic-client-generator-js
// DO NOT MODIFY IT BY HAND. Instead, modify the source open api file,
// and elastic/elastic-client-generator-js to regenerate this file again.

import {
  Transport,
  TransportRequestMetadata,
  TransportRequestOptions,
  TransportRequestOptionsWithMeta,
  TransportRequestOptionsWithOutMeta,
  TransportResult
} from '@elastic/transport'
import * as T from '../types'
import * as TB from '../typesWithBodyKey'
interface That { transport: Transport }

/**
  * Changes the number of requests per second for a particular Reindex operation.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.14/docs-reindex.html | Elasticsearch API documentation}
  */
export default async function ReindexRethrottleApi (this: That, params: T.ReindexRethrottleRequest | TB.ReindexRethrottleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ReindexRethrottleResponse>
export default async function ReindexRethrottleApi (this: That, params: T.ReindexRethrottleRequest | TB.ReindexRethrottleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ReindexRethrottleResponse, unknown>>
export default async function ReindexRethrottleApi (this: That, params: T.ReindexRethrottleRequest | TB.ReindexRethrottleRequest, options?: TransportRequestOptions): Promise<T.ReindexRethrottleResponse>
export default async function ReindexRethrottleApi (this: That, params: T.ReindexRethrottleRequest | TB.ReindexRethrottleRequest, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = ['task_id']
  const querystring: Record<string, any> = {}
  const body = undefined

  for (const key in params) {
    if (acceptedPath.includes(key)) {
      continue
    } else if (key !== 'body') {
      // @ts-expect-error
      querystring[key] = params[key]
    }
  }

  const method = 'POST'
  const path = `/_reindex/${encodeURIComponent(params.task_id.toString())}/_rethrottle`
  const meta: TransportRequestMetadata = {
    name: 'reindex_rethrottle',
    pathParts: {
      task_id: params.task_id
    }
  }
  return await this.transport.request({ path, method, querystring, body, meta }, options)
}
