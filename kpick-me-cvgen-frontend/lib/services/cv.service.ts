import { api } from '../api';

export interface CV {
  id: string;
  title: string;
  data: {
    personalInfo: any;
    experience: any[];
    education: any[];
    skills: any[];
    languages: any[];
  };
  templateId?: string;
  createdAt: string;
  updatedAt: string;
}

export const cvService = {
  async getAll(): Promise<CV[]> {
    const { data } = await api.get('/cv');
    return data;
  },

  async getOne(id: string): Promise<CV> {
    const { data } = await api.get(`/cv/${id}`);
    return data;
  },

  async create(cvData: Partial<CV>): Promise<CV> {
    const { data } = await api.post('/cv', cvData);
    return data;
  },

  async update(id: string, cvData: Partial<CV>): Promise<CV> {
    const { data } = await api.put(`/cv/${id}`, cvData);
    return data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/cv/${id}`);
  },

  async exportPDF(id: string): Promise<Blob> {
    const { data } = await api.get(`/cv/${id}/export/pdf`, {
      responseType: 'blob',
    });
    return data;
  },

  async exportDOCX(id: string): Promise<Blob> {
    const { data } = await api.get(`/cv/${id}/export/docx`, {
      responseType: 'blob',
    });
    return data;
  },

  async exportJSON(id: string): Promise<string> {
    const { data } = await api.get(`/cv/${id}/export/json`);
    return data;
  },

  async generateShareLink(id: string): Promise<{ link: string }> {
    const { data } = await api.get(`/cv/${id}/share`);
    return data;
  },
};