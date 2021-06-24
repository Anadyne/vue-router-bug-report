import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as common_pb from './common_pb';


export class SubResp extends jspb.Message {
  getSubList(): Array<string>;
  setSubList(value: Array<string>): SubResp;
  clearSubList(): SubResp;
  addSub(value: string, index?: number): SubResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubResp.AsObject;
  static toObject(includeInstance: boolean, msg: SubResp): SubResp.AsObject;
  static serializeBinaryToWriter(message: SubResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubResp;
  static deserializeBinaryFromReader(message: SubResp, reader: jspb.BinaryReader): SubResp;
}

export namespace SubResp {
  export type AsObject = {
    subList: Array<string>,
  }
}

export class SubUpdReq extends jspb.Message {
  getId(): common_pb.UserId | undefined;
  setId(value?: common_pb.UserId): SubUpdReq;
  hasId(): boolean;
  clearId(): SubUpdReq;

  getSubList(): Array<string>;
  setSubList(value: Array<string>): SubUpdReq;
  clearSubList(): SubUpdReq;
  addSub(value: string, index?: number): SubUpdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubUpdReq.AsObject;
  static toObject(includeInstance: boolean, msg: SubUpdReq): SubUpdReq.AsObject;
  static serializeBinaryToWriter(message: SubUpdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubUpdReq;
  static deserializeBinaryFromReader(message: SubUpdReq, reader: jspb.BinaryReader): SubUpdReq;
}

export namespace SubUpdReq {
  export type AsObject = {
    id?: common_pb.UserId.AsObject,
    subList: Array<string>,
  }
}

