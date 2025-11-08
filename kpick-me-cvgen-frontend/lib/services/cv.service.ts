import { api } from '../api';
import { generatePDFFromElement, generateDOCX, downloadJSON } from '../utils/pdf-generator';

export interface CV {
  id: string;
  title: string;
  data: {
    personalInfo: any;
    experience: any[];
    education: any[];
    skills: any[];
    languages: any[];
    projects?: any[];
  };
  templateId?: string;
  template?: string;
  content?: any;
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

  async exportPDF(elementId: string = 'cv-content', filename: string = 'cv.pdf'): Promise<void> {
    await generatePDFFromElement(elementId, filename);
  },

  async exportDOCX(cvData: any, filename: string = 'cv.docx'): Promise<void> {
    await generateDOCX(cvData, filename);
  },

  async exportJSON(cvData: any, filename: string = 'cv.json'): Promise<void> {
    downloadJSON(cvData, filename);
  },

  async generateShareLink(id: string): Promise<{ link: string }> {
    const { data } = await api.get(`/cv/${id}/share`);
    return data;
  },

  async generateWithAi(data: any): Promise<CV> {
    const { data: result } = await api.post('/cv/generate-with-ai', data);
    return result;
  },

  async enhanceWithAi(id: string, options?: any): Promise<CV> {
    const { data } = await api.post(`/cv/${id}/enhance-with-ai`, options);
    return data;
  },

  async optimizeForJob(id: string, jobDescription: string): Promise<CV> {
    const { data } = await api.post(`/cv/${id}/optimize-for-job`, { jobDescription });
    return data;
  },

  async getTemplates(): Promise<any[]> {
    const { data } = await api.get('/cv/templates');
    return data;
  },

  async createFromWizard(wizardData: any): Promise<CV> {
    const { data } = await api.post('/cv/wizard', wizardData);
    return data;
  },

  async previewCv(id: string, template?: string): Promise<any> {
    const { data } = await api.get(`/cv/${id}/preview`, {
      params: { template },
    });
    return data;
  },
};