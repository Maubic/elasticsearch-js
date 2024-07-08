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

export default class DanglingIndices {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Deletes the specified dangling index
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.15/modules-gateway-dangling-indices.html | Elasticsearch API documentation}
    */
  async deleteDanglingIndex (this: That, params: T.DanglingIndicesDeleteDanglingIndexRequest | TB.DanglingIndicesDeleteDanglingIndexRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.DanglingIndicesDeleteDanglingIndexResponse>
  async deleteDanglingIndex (this: That, params: T.DanglingIndicesDeleteDanglingIndexRequest | TB.DanglingIndicesDeleteDanglingIndexRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.DanglingIndicesDeleteDanglingIndexResponse, unknown>>
  async deleteDanglingIndex (this: That, params: T.DanglingIndicesDeleteDanglingIndexRequest | TB.DanglingIndicesDeleteDanglingIndexRequest, options?: TransportRequestOptions): Promise<T.DanglingIndicesDeleteDanglingIndexResponse>
  async deleteDanglingIndex (this: That, params: T.DanglingIndicesDeleteDanglingIndexRequest | TB.DanglingIndicesDeleteDanglingIndexRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index_uuid']
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

    const method = 'DELETE'
    const path = `/_dangling/${encodeURIComponent(params.index_uuid.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'dangling_indices.delete_dangling_index',
      pathParts: {
        index_uuid: params.index_uuid
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Imports the specified dangling index
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.15/modules-gateway-dangling-indices.html | Elasticsearch API documentation}
    */
  async importDanglingIndex (this: That, params: T.DanglingIndicesImportDanglingIndexRequest | TB.DanglingIndicesImportDanglingIndexRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.DanglingIndicesImportDanglingIndexResponse>
  async importDanglingIndex (this: That, params: T.DanglingIndicesImportDanglingIndexRequest | TB.DanglingIndicesImportDanglingIndexRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.DanglingIndicesImportDanglingIndexResponse, unknown>>
  async importDanglingIndex (this: That, params: T.DanglingIndicesImportDanglingIndexRequest | TB.DanglingIndicesImportDanglingIndexRequest, options?: TransportRequestOptions): Promise<T.DanglingIndicesImportDanglingIndexResponse>
  async importDanglingIndex (this: That, params: T.DanglingIndicesImportDanglingIndexRequest | TB.DanglingIndicesImportDanglingIndexRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index_uuid']
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
    const path = `/_dangling/${encodeURIComponent(params.index_uuid.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'dangling_indices.import_dangling_index',
      pathParts: {
        index_uuid: params.index_uuid
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Returns all dangling indices.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.15/modules-gateway-dangling-indices.html | Elasticsearch API documentation}
    */
  async listDanglingIndices (this: That, params?: T.DanglingIndicesListDanglingIndicesRequest | TB.DanglingIndicesListDanglingIndicesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.DanglingIndicesListDanglingIndicesResponse>
  async listDanglingIndices (this: That, params?: T.DanglingIndicesListDanglingIndicesRequest | TB.DanglingIndicesListDanglingIndicesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.DanglingIndicesListDanglingIndicesResponse, unknown>>
  async listDanglingIndices (this: That, params?: T.DanglingIndicesListDanglingIndicesRequest | TB.DanglingIndicesListDanglingIndicesRequest, options?: TransportRequestOptions): Promise<T.DanglingIndicesListDanglingIndicesResponse>
  async listDanglingIndices (this: That, params?: T.DanglingIndicesListDanglingIndicesRequest | TB.DanglingIndicesListDanglingIndicesRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_dangling'
    const meta: TransportRequestMetadata = {
      name: 'dangling_indices.list_dangling_indices'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
