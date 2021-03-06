import * as Http from "http";
import * as Url from "url";

namespace Aufgabe7 {
	let port: number = Number(process.env.PORT);
	if (!port)
		port = 8100;

	let server: Http.Server = Http.createServer();
	server.addListener("request", handleRequest);
	server.listen(port);

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

		_response.setHeader("content-type", "text/html; charset=utf-8");
		_response.setHeader("Access-Control-Allow-Origin", "*");

		let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
		for (let key in url.query) {
			_response.write("<p>" + key + ": " + url.query[key] + "</p>");
		}
		_response.end();
	}
}