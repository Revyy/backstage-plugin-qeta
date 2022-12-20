import React from 'react';
import { Button } from '@material-ui/core';
import {
  Content,
  ContentHeader,
  Header,
  HeaderLabel,
  Page,
} from '@backstage/core-components';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import { AskPage } from '../AskPage';
import { QuestionPage } from '../QuestionPage/QuestionPage';
import { QuestionList } from './QuestionList/QuestionList';
import { TagPage } from '../TagPage/TagPage';
import { UserPage } from '../UserPage/UserPage';

export const HomePageContent = () => {
  return (
    <Content>
      <ContentHeader title="All questions">
        <Button variant="contained" href="/qeta/ask">
          Ask question
        </Button>
      </ContentHeader>
      <QuestionList />
    </Content>
  );
};

export const HomePage = () => (
  <Page themeId="tool">
    <Header title="Q&A">
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Routes>
      <Route path="/" element={<HomePageContent />} />
      <Route path="/ask" element={<AskPage />} />
      <Route path="/questions/:id" element={<QuestionPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/user/*" element={<UserPage />} />
    </Routes>
  </Page>
);