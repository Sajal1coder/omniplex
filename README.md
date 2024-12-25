## The link to My hosted website [https://omniplex-main.vercel.app/]

<p align="center">
	<h1 align="center"><b>Omniplex</b></h1>
<p align="center">
    Open-Source Perplexity
    <br />
    <br />
  </p>
</p>

![Screenshot (41)](https://github.com/user-attachments/assets/3ad0e279-bc46-4be0-bf12-d58fe59f6f12)


## Get started

To run the project, modify the code in the Chat component to use the `// Development Code`.

1. Fork & Clone the repository

```bash
git clone git@github.com:Sajal1coder/omniplex-main
```

2. Install the dependencies

```bash
yarn
```

3. Fill out secrets in `.env.local`

```bash
BING_API_KEY=
OPENAI_API_KEY=

OPENWEATHERMAP_API_KEY=
ALPHA_VANTAGE_API_KEY=
FINNHUB_API_KEY=
RAPID_API=
```

4. Run the development server

```bash
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.








## Disclaimer

> We recently transitioned from the pages directory to the app directory, which involved significant changes to the project structure and architecture. As a result, you may encounter some inconsistencies or rough edges in the codebase.

# 🛠 My Approach

## Objective 1: UI Enhancement

1.Reviewed the app's structure and located essential files.


2.Filled all API keys.


3.Updated all login button routes (e.g., sidebar and chat history) to /login.


4.Created a login folder.


5.Developed a Page.tsx file similar to https://claude.ai/login.


6.Styled the login page with module.css.


7.Verified the website's functionality.

## Objective 2: API Integration

1. Researched useful APIs.


2.Integrated the LinkedIn Data Scraper API.


3.Utilized the API to fetch LinkedIn profiles from email addresses.


4.Created a plugin folder and implemented a page to display /plugins/linkedin.


5.Updated necessary files and populated API keys in .env.


## Objective 3: Deployment


1.Deployed the website using Vercel (familiar from previous projects).


2.Live at: https://omniplex-main.vercel.app/

## Objective 4: Beautification


1.Enhanced the login page with help from ChatGPT and Next.js 13 documentation.


2.Improved the app’s appearance using TailwindCSS and NextUI.


### App Architecture

- Language: TypeScript
- Frontend Framework: React
- State Management: Redux
- Web Framework: Next.js
- Backend and Database: Firebase
- UI Library: NextUI & Tremor
- CSS Framework: TailwindCSS
- AI SDK: Vercel AI SDK

### Services

- LLM: OpenAI
- Search API: Bing
- Weather API: OpenWeatherMap
- Stocks API: Alpha Vantage & Finnhub
- Dictionary API: WordnikFree Dictionary API
- LinkedIn API: An api to get a persons's linkedin profile from a email 
- Hosting & Analytics: Vercel
- Authentication, Storage & Database: Firebase



## 📜License

This project is licensed under the [AGPL-3.0 license](LICENSE).

## 📞 Contact

If you have any questions or suggestions, feel free to reach out to me at [sajalkumarbaranwal13@gmail.com].

Happy coding! 🚀
