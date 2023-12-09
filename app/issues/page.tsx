'use client';

import React, { useEffect, useState } from 'react'
import { Button, Table } from '@radix-ui/themes';
import Link from 'next/link';

interface Issue {
  title: string;
  description: string;
}

const IssuesPage = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/issues');
      const data = await response.json();
      
      setIssues(data);
    };
    fetchData();
  }, [issues]);

  return (
    <div>
      <Button><Link href='/issues/new'>New Issue</Link></Button>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue, index) => (
            <Table.Row key={index}>
              <Table.RowHeaderCell>{issue.title}</Table.RowHeaderCell>
              <Table.Cell>{issue.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default IssuesPage;
