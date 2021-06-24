import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as common_pb from './common_pb';


export class UserMedBio extends jspb.Message {
  getHemoglobin(): number;
  setHemoglobin(value: number): UserMedBio;

  getCholesterol(): string;
  setCholesterol(value: string): UserMedBio;

  getGlucose(): string;
  setGlucose(value: string): UserMedBio;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserMedBio.AsObject;
  static toObject(includeInstance: boolean, msg: UserMedBio): UserMedBio.AsObject;
  static serializeBinaryToWriter(message: UserMedBio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserMedBio;
  static deserializeBinaryFromReader(message: UserMedBio, reader: jspb.BinaryReader): UserMedBio;
}

export namespace UserMedBio {
  export type AsObject = {
    hemoglobin: number,
    cholesterol: string,
    glucose: string,
  }
}

export class BioInfo extends jspb.Message {
  getId(): common_pb.UserId | undefined;
  setId(value?: common_pb.UserId): BioInfo;
  hasId(): boolean;
  clearId(): BioInfo;

  getData(): UserMedBio | undefined;
  setData(value?: UserMedBio): BioInfo;
  hasData(): boolean;
  clearData(): BioInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BioInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BioInfo): BioInfo.AsObject;
  static serializeBinaryToWriter(message: BioInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BioInfo;
  static deserializeBinaryFromReader(message: BioInfo, reader: jspb.BinaryReader): BioInfo;
}

export namespace BioInfo {
  export type AsObject = {
    id?: common_pb.UserId.AsObject,
    data?: UserMedBio.AsObject,
  }
}

