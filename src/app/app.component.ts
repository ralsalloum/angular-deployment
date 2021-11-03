import { Component, OnInit } from '@angular/core';

declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'swagger-ui-dist-angular';

  constructor() { }

  ngOnInit(): void {
    const ui = SwaggerUIBundle({
      dom_id: '#swagger-ui',
      layout: 'BaseLayout',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
      ],
      url: 'http://159.89.13.229/doc.json',
      docExpansion: 'none',
      operationsSorter: 'alpha'
    });
  }
}
