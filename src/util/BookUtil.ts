import { Book } from "@/axios/biztoi";
import { isNil } from "lodash";

export default class BookUtil {
  static bookConverter(volume: IVolume): Book {
    return {
      id: volume.id || "",
      isbn: this.getIsbn(volume),
      detail: this.getDetail(volume.volumeInfo!),
      pictureUrl: this.getPictureurl(volume.volumeInfo!),
      linkUrl: volume.volumeInfo!.infoLink || "No link",
      title: volume.volumeInfo!.title || "No title",
      author: volume.volumeInfo!.authors || [],
      category: volume.volumeInfo!.categories || []
    };
  }

  static getIsbn(volume: IVolume): string {
    if (
      !isNil(volume) &&
      !isNil(volume.volumeInfo) &&
      !isNil(volume.volumeInfo.industryIdentifiers)
    ) {
      const identifiers: [
        { identifier: string | undefined; type: string | undefined }
      ] = volume.volumeInfo.industryIdentifiers;
      return identifiers[0].identifier || "";
    }
    return "";
  }
  static getDetail(volumeInfo: IVolumeInfo): string {
    if (!isNil(volumeInfo)) {
      return volumeInfo.description || "";
    }
    return "";
  }
  static getPictureurl(volumeInfo: IVolumeInfo): string {
    if (!isNil(volumeInfo) && !isNil(volumeInfo.imageLinks)) {
      const imageLinks: {
        smallThumbnail: string | undefined;
        thumbnail: string | undefined;
      } = volumeInfo.imageLinks;
      return (
        imageLinks.thumbnail ||
        imageLinks.smallThumbnail ||
        require("@/assets/noimage.png")
      );
    }
    return require("@/assets/noimage.png");
  }
}

export interface IVolumes {
  kind: string | undefined;
  totalItems: string | undefined;
  items: IVolume[];
}

export interface IVolume {
  accessInfo: IAccessInfo | undefined;
  etag: string | undefined;
  id: string | undefined;
  kind: string | undefined;
  layerInfo: object | undefined;
  recommendedInfo: object | undefined;
  saleInfo: ISaleInfo | undefined;
  searchInfo: object | undefined;
  selfLink: string | undefined;
  userInfo: object | undefined;
  volumeInfo: IVolumeInfo | undefined;
}

interface IAccessInfo {
  accessViewStatus: string | undefined;
  country: string | undefined;
  embeddable: boolean | undefined;
  publicDomain: string | undefined;
  etag: string | undefined;
  textToSpeechPermission: string | undefined;
  quoteSharingAllowed: string | undefined;
  viewability: boolean | undefined;
  webReaderLink: string | undefined;
  pdf: object | undefined;
  ehub: object | undefined;
}

interface ISaleInfo {
  buyLink: string | undefined;
  isEbook: string | undefined;
  country: string | undefined;
}

interface IVolumeInfo {
  authors: [] | undefined;
  categories: [] | undefined;
  description: string | undefined;
  imageLinks:
    | { smallThumbnail: string | undefined; thumbnail: string | undefined }
    | undefined;
  industryIdentifiers:
    | [{ identifier: string | undefined; type: string | undefined }]
    | undefined;
  infoLink: string | undefined;
  title: string | undefined;
  language: string | undefined;
  maturityRating: string | undefined;
  pageCount: number | undefined;
  previewLink: number | undefined;
  printType: number | undefined;
}
