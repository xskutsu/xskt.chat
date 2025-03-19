import { existsSync, readFileSync, statSync } from "fs";
import { createServer } from "http";

const port = process.env.PORT ?? "3001";
const responseHeaders = {
	"Access-Control-Allow-Methods": "OPTIONS, GET",
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Max-Age": 86400
};

// https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types
function getMimeType(extension) {
	switch (extension) {
		case "aac":
			return "audio/aac";
		case "abw":
			return "application/x-abiword";
		case "apng":
			return "image/apng";
		case "arc":
			return "application/x-freearc";
		case "avif":
			return "image/avif";
		case "avi":
			return "video/x-msvideo";
		case "azw":
			return "application/vnd.amazon.ebook";
		case "bin":
			return "application/octet-stream";
		case "bmp":
			return "image/bmp";
		case "bz":
			return "application/x-bzip";
		case "bz2":
			return "application/x-bzip2";
		case "cda":
			return "application/x-cdf";
		case "csh":
			return "application/x-csh";
		case "css":
			return "text/css";
		case "csv":
			return "text/csv";
		case "doc":
			return "application/msword";
		case "docx":
			return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
		case "eot":
			return "application/vnd.ms-fontobject";
		case "epub":
			return "application/epub+zip";
		case "gz":
			return "application/gzip";
		case "gif":
			return "image/gif";
		case "htm":
		case "html":
			return "text/html";
		case "ico":
			return "image/vnd.microsoft.icon";
		case "ics":
			return "text/calendar";
		case "jar":
			return "application/java-archive";
		case "jpeg":
		case "jpg":
			return "image/jpeg";
		case "js":
			return "text/javascript";
		case "json":
			return "application/json";
		case "jsonld":
			return "application/ld+json";
		case "mid":
		case "midi":
			return "audio/midi";
		case "mjs":
			return "text/javascript";
		case "mp3":
			return "audio/mpeg";
		case "mp4":
			return "video/mp4";
		case "mpeg":
			return "video/mpeg";
		case "mpkg":
			return "application/vnd.apple.installer+xml";
		case "odp":
			return "application/vnd.oasis.opendocument.presentation";
		case "ods":
			return "application/vnd.oasis.opendocument.spreadsheet";
		case "odt":
			return "application/vnd.oasis.opendocument.text";
		case "oga":
			return "audio/ogg";
		case "ogv":
			return "video/ogg";
		case "ogx":
			return "application/ogg";
		case "opus":
			return "audio/ogg";
		case "otf":
			return "font/otf";
		case "png":
			return "image/png";
		case "pdf":
			return "application/pdf";
		case "php":
			return "application/x-httpd-php";
		case "ppt":
			return "application/vnd.ms-powerpoint";
		case "pptx":
			return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
		case "rar":
			return "application/vnd.rar";
		case "rtf":
			return "application/rtf";
		case "sh":
			return "application/x-sh";
		case "svg":
			return "image/svg+xml";
		case "tar":
			return "application/x-tar";
		case "tif":
		case "tiff":
			return "image/tiff";
		case "ts":
			return "video/mp2t";
		case "ttf":
			return "font/ttf";
		case "txt":
			return "text/plain";
		case "vsd":
			return "application/vnd.visio";
		case "wav":
			return "audio/wav";
		case "weba":
			return "audio/webm";
		case "webm":
			return "video/webm";
		case "webp":
			return "image/webp";
		case "woff":
			return "font/woff";
		case "woff2":
			return "font/woff2";
		case "xhtml":
			return "application/xhtml+xml";
		case "xls":
			return "application/vnd.ms-excel";
		case "xlsx":
			return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
		case "xml":
			return "application/xml";
		case "xul":
			return "application/vnd.mozilla.xul+xml";
		case "zip":
			return "application/zip";
		case "3gp":
			return "video/3gpp";
		case "3g2":
			return "video/3gpp2";
		case "7z":
			return "application/x-7z-compressed";
		default:
			return "application/octet-stream";
	}
}

const server = createServer(function (request, response) {
	const url = new URL(request.url ?? "", `https://${request.headers.host}/`);
	const requestPath = url.pathname.replace(/\/+$/, "") ?? "";
	const filePath = `./public${requestPath.length === 0 ? "/index.html" : requestPath}`;
	if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
		response.writeHead(404, responseHeaders);
		response.end("404");
		return;
	}
	response.setHeader("Content-Type", getMimeType(filePath.split(".").pop()));
	response.writeHead(200, responseHeaders);
	response.end(readFileSync(filePath));
});

server.listen(port, function () {
	console.log(`xskt.chat http server listening on port "${port}".`);
});