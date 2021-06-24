import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as common_pb from './common_pb';


export class UserMedCommon extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): UserMedCommon;

  getWeight(): number;
  setWeight(value: number): UserMedCommon;

  getPreshigh(): number;
  setPreshigh(value: number): UserMedCommon;

  getPreslow(): number;
  setPreslow(value: number): UserMedCommon;

  getSightleft(): string;
  setSightleft(value: string): UserMedCommon;

  getSightright(): string;
  setSightright(value: string): UserMedCommon;

  getSmoke(): string;
  setSmoke(value: string): UserMedCommon;

  getFamily(): string;
  setFamily(value: string): UserMedCommon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserMedCommon.AsObject;
  static toObject(includeInstance: boolean, msg: UserMedCommon): UserMedCommon.AsObject;
  static serializeBinaryToWriter(message: UserMedCommon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserMedCommon;
  static deserializeBinaryFromReader(message: UserMedCommon, reader: jspb.BinaryReader): UserMedCommon;
}

export namespace UserMedCommon {
  export type AsObject = {
    height: number,
    weight: number,
    preshigh: number,
    preslow: number,
    sightleft: string,
    sightright: string,
    smoke: string,
    family: string,
  }
}

export class UserMedInfo extends jspb.Message {
  getId(): common_pb.UserId | undefined;
  setId(value?: common_pb.UserId): UserMedInfo;
  hasId(): boolean;
  clearId(): UserMedInfo;

  getData(): UserMedCommon | undefined;
  setData(value?: UserMedCommon): UserMedInfo;
  hasData(): boolean;
  clearData(): UserMedInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserMedInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserMedInfo): UserMedInfo.AsObject;
  static serializeBinaryToWriter(message: UserMedInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserMedInfo;
  static deserializeBinaryFromReader(message: UserMedInfo, reader: jspb.BinaryReader): UserMedInfo;
}

export namespace UserMedInfo {
  export type AsObject = {
    id?: common_pb.UserId.AsObject,
    data?: UserMedCommon.AsObject,
  }
}

